"""Render the recorded npm package benchmark. Requires matplotlib and Pillow."""

import json
from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
import numpy as np

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "docs/benchmarks/2026-10-27.json"
OUTPUT = ROOT / "assets/benchmark-2026-10-27.png"
snapshot = json.loads(DATA.read_text())
libraries = snapshot["libraries"]
colors = ["#0b7668", "#536a7f", "#b68735", "#a0aaa5"]
ink = "#142923"
muted = "#53685f"

plt.rcParams.update({
    "font.family": "DejaVu Sans",
    "font.size": 13.5,
    "text.color": ink,
    "axes.labelcolor": muted,
    "xtick.color": muted,
    "ytick.color": muted,
    "axes.spines.top": False,
    "axes.spines.right": False,
    "axes.spines.left": False,
    "axes.spines.bottom": False,
})
fig = plt.figure(figsize=(12, 10), facecolor="white")
logo = fig.add_axes([0.067, 0.921, 0.038, 0.046])
logo.imshow(mpimg.imread(ROOT / "website/public/brand/solite-mark.png"))
logo.axis("off")
fig.text(0.12, 0.94, "Solite Icons / Bundle benchmark", fontsize=24, weight="bold", va="center")
fig.text(0.07, 0.895, "Published npm packages · measured 27 October 2026", fontsize=13.5, color=muted)

ax = fig.add_axes([0.11, 0.468, 0.84, 0.287])
x = np.arange(len(snapshot["counts"]))
width = 0.18
handles = []
for index, library in enumerate(libraries):
    values = np.array(library["gzipBytes"]) / 1024
    bars = ax.bar(x + (index - 1.5) * width, values, width=width * 0.91,
                  color=colors[index], zorder=3)
    ax.bar_label(bars, labels=[f"{value:.2f}" for value in values],
                 padding=5, fontsize=12.5, color=ink)
    suffix = " · 24px outline" if library["name"] == "@heroicons/react" else " · Feather" if library["name"] == "react-icons" else ""
    handles.append((bars[0], f"{library['label']} {library['version']}{suffix}"))
ax.set_xticks(x, [f"{count} icon" + ("s" if count != 1 else "") for count in snapshot["counts"]])
ax.set_ylabel("Gzipped JavaScript (KiB)", labelpad=15)
ax.set_ylim(0, 7.2)
ax.set_yticks([0, 2, 4, 6])
ax.tick_params(length=0, pad=9)
ax.grid(axis="y", color="#dce5df", linewidth=0.8, zorder=0)
fig.text(0.07, 0.783, "Browser bundle", fontsize=18, weight="bold")
fig.legend([h[0] for h in handles], [h[1] for h in handles],
           loc="center", bbox_to_anchor=(0.52, 0.842), ncol=2,
           frameon=False, fontsize=12.5, columnspacing=2, handlelength=1.2)
fig.text(0.11, 0.412, "Named ESM imports · minified ES2020 · React excluded", fontsize=13, color=muted)

storage = fig.add_axes([0.255, 0.17, 0.65, 0.175])
values = np.array([lib["unpackedBytes"] for lib in libraries]) / 1024**2
bars = storage.barh(np.arange(4), values, color=colors, height=0.55, zorder=3)
storage.invert_yaxis()
storage.set_yticks(np.arange(4), [lib["label"] for lib in libraries])
storage.set_xlim(0, 94)
storage.set_xticks([0, 30, 60, 90])
storage.set_xlabel("Unpacked package (MiB)", labelpad=8)
storage.tick_params(length=0, pad=9)
storage.grid(axis="x", color="#dce5df", linewidth=0.8, zorder=0)
storage.bar_label(bars, labels=[f"{value:.2f}" for value in values], padding=7, fontsize=12.5, color=ink)
fig.text(0.07, 0.37, "Full install footprint", fontsize=18, weight="bold")
fig.text(0.07, 0.085, "Packages contain different-sized collections. Disk footprint is not browser payload.", fontsize=12.5, color=muted)
fig.text(0.07, 0.052, "esbuild 0.28.1 · gzip level 9 · same icon purposes, different drawings and features", fontsize=12, color=muted)
fig.text(0.07, 0.025, "Not a page-load or FPS test. Methods and raw data: docs/benchmarks/2026-10-27.md", fontsize=11.5, color=muted)
fig.savefig(OUTPUT, dpi=180, facecolor="white", pil_kwargs={"optimize": True})
plt.close(fig)
print(OUTPUT)
