/**
 * Shared navigation helper — replaces the repeated `handleNav` boilerplate
 * that was copy-pasted across 7 components.
 *
 * Usage:
 *   import { navigateTo } from "../../lib/nav";
 *   onClick={(e) => navigateTo(e, onNavigate, "about")}
 */
export const navigateTo = (
  e: React.MouseEvent,
  onNavigate: ((page: string) => void) | undefined,
  page: string
): void => {
  e.preventDefault();
  if (onNavigate) {
    onNavigate(page);
  }
};
