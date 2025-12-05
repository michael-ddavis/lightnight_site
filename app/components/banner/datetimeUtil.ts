export function toISO(dateStr: string, timeStr: string): string {
  const [hmm, ampm] = timeStr.trim().split(" ");
  let [h, m] = (hmm || "00:00").split(":").map((n) => parseInt(n, 10));

  if ((ampm || "").toUpperCase() === "PM" && h < 12) h += 12;
  if ((ampm || "").toUpperCase() === "AM" && h === 12) h = 0;

  const hh = String(Number.isFinite(h) ? h : 0).padStart(2, "0");
  const mm = String(Number.isFinite(m) ? m : 0).padStart(2, "0");

  const local = new Date(`${dateStr}T${hh}:${mm}:00`);
  return local.toISOString();
}
