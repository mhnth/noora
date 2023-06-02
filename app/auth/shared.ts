import { api_call } from '@/lib/api_call';

type Params = Record<string, string>;

export const post_form = async (url: string, params: Params) => {
  try {
    await api_call(url, params, 'POST');
    return;
  } catch (ex: any) {
    console.log(ex);
    return ex.body?.message || 'unknown error';
  }
};

export const return_back = () => {
  const back = sessionStorage.getItem('back') || window.location.origin;
  window.location.href = back;
};

export function convertFormData(data: FormData): Params {
  // Tạo một mảng từ các cặp key-value trong formData
  const entries = Array.from(data.entries());

  // Sử dụng Object.fromEntries để chuyển đổi mảng thành đối tượng
  return Object.fromEntries(entries) as Params;
}
