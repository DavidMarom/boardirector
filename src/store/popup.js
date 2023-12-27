import { create } from 'zustand';

const usePopupStore = create((set) => ({
  popId: 0,
  content: {},
  triggerPopup: (id) => set(() => ({ popId: id })),
  setPopupContent: (content) => set(() => ({ content: content })),
}));

export default usePopupStore;
