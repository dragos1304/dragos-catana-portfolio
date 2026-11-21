"use client";
import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { Check, ChevronDown } from "lucide-react";

/**
 * The "De ce ai nevoie?" dropdown, styled like the rest of the site (the native list cannot be styled).
 * Accessible listbox: arrow keys, Home/End, Enter/Space, Escape, type-ahead; closes on outside click.
 * The value travels in a hidden input named `name`, so the form contract is unchanged.
 */
export function NeedSelect({ name, label, placeholder, options, invalid, onChange }: {
  name: string;
  label: string;
  placeholder: string;
  options: { value: string; label: string }[];
  invalid?: boolean;
  onChange?: (value: string) => void;
}) {
  const id = useId();
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const list = useRef<HTMLUListElement>(null);
  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => { if (!root.current?.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", close);
    list.current?.focus();
    return () => document.removeEventListener("mousedown", close);
  }, [open]);

  function choose(i: number) {
    const v = options[i].value;
    setValue(v);
    onChange?.(v);
    setOpen(false);
    button.current?.focus();
  }

  function openAt(i: number) { setActive(i); setOpen(true); }

  function onButtonKey(e: KeyboardEvent) {
    if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) {
      e.preventDefault();
      const current = Math.max(0, options.findIndex((o) => o.value === value));
      openAt(e.key === "ArrowUp" ? Math.max(0, current - 1) : current);
    }
  }

  function onListKey(e: KeyboardEvent) {
    const last = options.length - 1;
    if (e.key === "ArrowDown") { e.preventDefault(); setActive((a) => Math.min(last, a + 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive((a) => Math.max(0, a - 1)); }
    else if (e.key === "Home") { e.preventDefault(); setActive(0); }
    else if (e.key === "End") { e.preventDefault(); setActive(last); }
    else if (e.key === "Enter" || e.key === " ") { e.preventDefault(); choose(active); }
    else if (e.key === "Escape" || e.key === "Tab") { setOpen(false); if (e.key === "Escape") button.current?.focus(); }
    else if (e.key.length === 1) {
      const i = options.findIndex((o) => o.label.toLowerCase().startsWith(e.key.toLowerCase()));
      if (i >= 0) setActive(i);
    }
  }

  return (
    <div ref={root} className="relative">
      <span id={`${id}-label`} className="block text-sm font-medium">{label}</span>
      <input type="hidden" name={name} value={value} />
      <button
        ref={button}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={`${id}-label ${id}-value`}
        aria-invalid={invalid || undefined}
        onClick={() => (open ? setOpen(false) : openAt(Math.max(0, options.findIndex((o) => o.value === value))))}
        onKeyDown={onButtonKey}
        className={`mt-1.5 flex w-full items-center justify-between gap-3 rounded-md border bg-white px-4 py-3 text-left text-base transition-colors hover:border-ink focus:border-ink ${invalid ? "border-orange-ink" : open ? "border-ink" : "border-ink/25"}`}
      >
        <span id={`${id}-value`} className={selected ? "text-ink" : "text-muted/70"}>{selected?.label ?? placeholder}</span>
        <ChevronDown aria-hidden className={`h-5 w-5 shrink-0 text-ink transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <ul
          ref={list}
          role="listbox"
          tabIndex={-1}
          aria-labelledby={`${id}-label`}
          aria-activedescendant={`${id}-opt-${active}`}
          onKeyDown={onListKey}
          className="absolute left-0 right-0 z-20 mt-2 overflow-hidden rounded-2xl border-2 border-ink bg-white py-1.5 shadow-[6px_6px_0_0_var(--color-ink)] outline-none"
        >
          {options.map((o, i) => {
            const isSel = o.value === value;
            return (
              <li
                key={o.value}
                id={`${id}-opt-${i}`}
                role="option"
                aria-selected={isSel}
                onMouseEnter={() => setActive(i)}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => choose(i)}
                className={`flex cursor-pointer items-center justify-between gap-3 px-4 py-3 text-[15px] ${i === active ? "bg-paper" : ""} ${isSel ? "font-semibold text-ink" : "text-ink"}`}
              >
                <span className="flex items-center gap-3">
                  <span aria-hidden className={`h-2 w-2 shrink-0 rounded-full ${isSel ? "bg-orange" : "bg-ink/15"}`} />
                  {o.label}
                </span>
                {isSel && <Check aria-hidden className="h-4 w-4 shrink-0 text-orange-ink" />}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
