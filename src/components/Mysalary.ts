import { reactive, ref, toRef } from 'vue';

// Mysalary 函数，使用 reactive 和 ref
export function Mysalary() {
  const userName = ref('YT'); // `userName` 是 `ref`
  const salary = ref(15000);  // `salary` 是 `ref`
  
  // 使用 reactive 创建响应式对象
  const userInfo = reactive({
    age: 18,
    sex: 1,
    department: '前端',
    skills: ['HTML', 'CSS', 'JavaScript']
  });

  // 使用 toRef 来提取 userInfo 的属性，并保持响应性
  let age = toRef(userInfo, 'age');
 let sex = toRef(userInfo, 'sex');
  let department = toRef(userInfo, 'department');
  let skills = toRef(userInfo, 'skills');

  // 返回数据和方法
  return { userName, salary, userInfo, age, sex, department, skills };
}
