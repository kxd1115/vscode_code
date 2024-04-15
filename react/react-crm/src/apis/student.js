import { request } from '@/utils/request';

// 获取全体学生
export function getAllStudentAPI() {
  return request({
    url: '/student',
    method: 'GET',
  })
}