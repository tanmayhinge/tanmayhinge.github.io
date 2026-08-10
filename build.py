#!/usr/bin/env python3
"""Inject shared partials into every page.

The nav, the footer links and the shared <head> block live in partials/ and
nowhere else. Each page marks where they go:

    <!-- head:start -->
    ...generated...
    <!-- head:end -->

Run `python3 build.py` after editing a partial. The script is idempotent:
running it twice leaves the tree unchanged. Every page is validated before
anything is written, so a page with missing markers aborts the whole run
rather than leaving the tree half-rebuilt.
"""

import glob
import re
import sys

PARTIALS = {
    "head": "partials/head.html",
    "nav": "partials/nav.html",
    "foot": "partials/foot.html",
}
SKIP = ("partials/",)


def pages():
    return sorted(
        f for f in glob.glob("**/*.html", recursive=True)
        if not f.startswith(SKIP)
    )


def markers(name):
    return f"<!-- {name}:start -->", f"<!-- {name}:end -->"


def pattern(name):
    start, end = markers(name)
    return re.compile(
        r"([ \t]*)" + re.escape(start) + r".*?[ \t]*" + re.escape(end),
        re.S,
    )


def inject(text, name, body):
    """Replace whatever sits between the markers, re-indented to match them."""
    pat = pattern(name)
    start, end = markers(name)
    indent = pat.search(text).group(1)
    lines = [indent + ln if ln.strip() else "" for ln in body.strip().split("\n")]
    return pat.sub(
        lambda _: indent + start + "\n" + "\n".join(lines) + "\n" + indent + end,
        text,
        count=1,
    )


def main():
    bodies = {
        n: open(p, encoding="utf-8").read() for n, p in PARTIALS.items()
    }
    paths = pages()

    # Validate everything first: a bad page must not leave a half-written tree.
    sources = {}
    problems = []
    for path in paths:
        sources[path] = open(path, encoding="utf-8").read()
        for name in PARTIALS:
            if not pattern(name).search(sources[path]):
                start, end = markers(name)
                problems.append(f"  {path}: missing {name} markers ({start} / {end})")
    if problems:
        sys.exit("error: cannot build\n" + "\n".join(problems))

    changed = []
    for path in paths:
        text = original = sources[path]
        for name, body in bodies.items():
            text = inject(text, name, body)
        if text != original:
            open(path, "w", encoding="utf-8").write(text)
            changed.append(path)

    print(f"{len(paths)} pages checked, {len(changed)} rewritten")
    for c in changed:
        print(f"  {c}")


if __name__ == "__main__":
    main()
