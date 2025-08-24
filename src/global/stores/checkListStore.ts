import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AnalysisRequest {
  addressId?: number;
  numOfWorkers?: number;
  addressInfoList?: {
    title: string;
    description: string;
    answer?: boolean | null;
  }[];
}

interface CheckListStore {
  analysisRequest: AnalysisRequest;
  setAnalysisRequest: (request: AnalysisRequest) => void;
  resetAnalysisRequest: () => void;
}

export const useCheckListStore = create<CheckListStore>()(
  persist(
    (set) => ({
      analysisRequest: {
        addressId: 0,
        numOfWorkers: 0,
        addressInfoList: [],
      },
      setAnalysisRequest: (request: Partial<AnalysisRequest>) =>
        set((state) => ({
          analysisRequest: { ...state.analysisRequest, ...request },
        })),
      resetAnalysisRequest: () =>
        set({
          analysisRequest: {
            addressId: 0,
            numOfWorkers: 0,
            addressInfoList: [],
          },
        }),
    }),
    {
      name: "checklist-storage",
    }
  )
);
