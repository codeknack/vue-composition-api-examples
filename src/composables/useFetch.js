import {toRefs, reactive} from 'vue';

export function useFetch(url, options) {
  const state = reactive({
    data: null,
    error: null,
    loading: false
  });
  const fetchData = async () => {
    state.loading = true;
    try {
      const res = await fetch(url, options);
      state.data = await res.json();
    } catch (errors) {
      state.error = errors;
    } finally {
      state.loading = false;
    }
  };
  fetchData();
  
  return {...toRefs(state)};
}