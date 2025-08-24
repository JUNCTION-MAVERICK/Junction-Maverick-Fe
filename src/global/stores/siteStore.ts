import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SiteInfo {
  addressId: number;
  siteAddress: string;
  numberOfWorkers: string;
  checkListCheck: string;
  workDate: string;
}

interface SiteStore {
  siteInfo: SiteInfo;
  setSiteAddress: (name: string) => void;
  setAddressId: (id: number) => void;
  setNumberOfWorkers: (count: string) => void;
  setCheckListCheck: (type: string) => void;
  setWorkDate: (date: string) => void;
  resetSiteInfo: () => void;
}

export const useSiteStore = create<SiteStore>()(
  persist(
    (set) => ({
      siteInfo: {
        addressId: 0,
        siteAddress: "",
        numberOfWorkers: "",
        checkListCheck: "",
        workDate: new Date().toISOString().split("T")[0],
      },
      setAddressId: (id: number) =>
        set((state) => ({
          siteInfo: { ...state.siteInfo, addressId: id },
        })),
      setSiteAddress: (name: string) =>
        set((state) => ({
          siteInfo: { ...state.siteInfo, siteAddress: name },
        })),
      setNumberOfWorkers: (count: string) =>
        set((state) => ({
          siteInfo: { ...state.siteInfo, numberOfWorkers: count },
        })),
      setCheckListCheck: (type: string) =>
        set((state) => ({
          siteInfo: { ...state.siteInfo, checkListCheck: type },
        })),
      setWorkDate: (date: string) =>
        set((state) => ({
          siteInfo: { ...state.siteInfo, workDate: date },
        })),
      resetSiteInfo: () =>
        set({
          siteInfo: {
            addressId: 0,
            siteAddress: "",
            numberOfWorkers: "",
            checkListCheck: "",
            workDate: new Date().toISOString().split("T")[0],
          },
        }),
    }),
    {
      name: "site-storage",
    }
  )
);
