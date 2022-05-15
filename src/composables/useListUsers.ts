import { onMounted, reactive, ToRef, watch } from 'vue'
import sourceData from '@/data.json'

export default function useListUsers (bankId: ToRef<string>) {
  const users: User[] = reactive([])
  const getBankUsers = () => {
    const bank = sourceData.banks.find((bank: Bank) => bank.id === bankId.value)
    bank?.users.forEach((userId: string) => {
      const user = sourceData.users.find((userObject: User) => userObject.id === userId)
      if (user !== undefined) users.push(user)
    })
  }

  onMounted(getBankUsers)
  watch(bankId, () => {
    users.splice(0, users.length)
    getBankUsers()
  })

  return { users }
}
