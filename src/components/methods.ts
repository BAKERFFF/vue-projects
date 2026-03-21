import { ref, toRef } from 'vue';
import { Mysalary } from "@/components/Mysalary";

export function useMethods() {
  const newSkill = ref('');
  const showuserInfo = ref(false);

  // 只调用一次 Mysalary
  const { userInfo, userName, salary } = Mysalary();

  const userSkills = toRef(userInfo, 'skills');
  const userAge = toRef(userInfo, 'age');
  const userSex = toRef(userInfo, 'sex');
  const userDepartment = toRef(userInfo, 'department');

  function addSalary() {
    salary.value += 1000;
  }

  function learnSkill() {
    if (newSkill.value.trim()) {
      userSkills.value.push(newSkill.value);
      newSkill.value = '';
    }
  }

  function deleteSkill() {
    userSkills.value.pop();
  }

  function changeuserInfo() {
    showuserInfo.value = !showuserInfo.value;
  }

  return {
    newSkill,
    userInfo,
    userName,
    salary,
    showuserInfo,
    addSalary,
    learnSkill,
    deleteSkill,
    changeuserInfo,
    userSkills,
    userAge,
    userSex,
    userDepartment,
  };
}
