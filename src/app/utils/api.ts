import { projectId, publicAnonKey } from '/utils/supabase/info';

const API_URL = `https://${projectId}.supabase.co/functions/v1/make-server-7e85be04`;

export const api = {
  // ...
  async healthCheck() {
    return fetch(`${API_URL}/health`, { headers: { Authorization: `Bearer ${publicAnonKey}` } }).then(r => r.json());
  },
  // ...
};
