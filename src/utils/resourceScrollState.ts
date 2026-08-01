// src/utils/resourceScrollState.ts

export interface ResourcesPageState {
  selectedTopic: string;
  searchQuery: string;
  visibleCount: number;
  scrollY: number;
  isReturning: boolean;
}

const STORAGE_KEY = 'prostolabs_resources_state';

export const saveResourcesState = (state: Omit<ResourcesPageState, 'isReturning'>) => {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ ...state, isReturning: true }));
  } catch (e) {
    console.error('Failed to save resources state', e);
  }
};

export const getResourcesState = (): ResourcesPageState | null => {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as ResourcesPageState;
  } catch (e) {
    return null;
  }
};

export const clearResourcesState = () => {
  try {
    sessionStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error('Failed to clear resources state', e);
  }
};