const STORAGE_KEY = "contact_rate_limit";
const FIVE_SEC = 5 * 1000;
const FIFTEEN_MIN = 15 * 60 * 1000;
const THIRTY_MIN = 30 * 60 * 1000;

type RateState = { count: number; lastTime: number };

function getState(): RateState {
  if (typeof window === "undefined") return { count: 0, lastTime: 0 };
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : { count: 0, lastTime: 0 };
}

function setState(state: RateState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function checkRateLimit(): { allowed: boolean; waitMs?: number } {
  const now = Date.now();
  const { count, lastTime } = getState();
  const elapsed = now - lastTime;

  if (count === 0) {
    setState({ count: 1, lastTime: now });
    return { allowed: true };
  }

  if (count === 4) {
    if (elapsed >= THIRTY_MIN) {
      setState({ count: 1, lastTime: now });
      return { allowed: true };
    }
    return { allowed: false, waitMs: THIRTY_MIN - elapsed };
  }

  if (elapsed >= FIFTEEN_MIN) {
    setState({ count: 1, lastTime: now });
    return { allowed: true };
  }

  const requiredWait = count === 3 ? THIRTY_MIN : FIVE_SEC;

  if (elapsed < requiredWait) {
    return { allowed: false, waitMs: requiredWait - elapsed };
  }

  setState({ count: count + 1, lastTime: now });
  return { allowed: true };
}