#!/usr/bin/env python3
"""Inject shared partials into every page.

The nav and the shared <head> block live in partials/ and nowhere else. Each page
marks where they go:

    <!-- head:start -->
    ...generated...
    <!-- head:end -->

Run `python3 build.py` after editing a partial. The script is idempotent: running
it twice leaves the tree unchanged.
"""

import glob
import re
import sys

PARTIALS = {"head": "partials/head.html", "nav": "partials/nav.html"}
SKIP = ("partials/",)


def pages():
    return sorted(
        f for f in glob.glob("**/*.html", recursive=True)
        if not f.startswith(SKIP)
    )


def inject(text, name, body, path):
    """Replace whatever sits between the markers, re-indented to match them."""
    start, end = f"<!-- {name}:start -->", f"<!-- {name}:end -->"
    pattern = re.compile(
        r"([ \t]*)" + re.escape(start) + r".*?[ \t]*" + re.escape(end),
        re.S,
    )
    match = pattern.search(text)
    if not match:
        sys.exit(f"error: {path} is missing the {name} markers ({start} / {end})")
    indent = match.group(1)
    lines = [indent + ln if ln.strip() else "" for ln in body.strip().split("\n")]
    return pattern.sub(
        lambda _: indent + start + "\n" + "\n".join(lines) + "\n" + indent + end,
        text,
        count=1,
    )


def main():
    bodies = {n: open(p).read() for n, p in PARTIALS.items()}
    changed = []
    for path in pages():
        original = open(path).read()
        text = original
        for name, body in bodies.items():
            text = inject(text, name, body, path)
        if text != original:
            open(path, "w").write(text)
            changed.append(path)
    print(f"{len(pages())} pages checked, {len(changed)} rewritten")
    for c in changed:
        print(f"  {c}")


if __name__ == "__main__":
    main()
