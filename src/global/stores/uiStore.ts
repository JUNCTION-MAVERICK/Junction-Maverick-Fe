import { create } from "zustand";

interface UIState {
  isLoading: boolean;
  theme: "light" | "dark";
  sidebarOpen: boolean;
  setLoading: (loading: boolean) => void;
  setTheme: (theme: "light" | "dark") => void;
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  isLoading: false,
  theme: "light",
  sidebarOpen: false,
  setLoading: (loading: boolean) => set({ isLoading: loading }),
  setTheme: (theme: "light" | "dark") => set({ theme }),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setSidebarOpen: (open: boolean) => set({ sidebarOpen: open }),
}));
