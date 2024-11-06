'use server'
import { SignupFormSchema } from '@/app/_lib/definitions'

export async function signup(state, formData) {
    // 1. validate fields
    const validationResult = SignupFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
    })

    if (!validationResult.success) {
        return {
            errors: validationResult.error.flatten().fieldErrors,
        }
    }

    const { name, email, password } = validationResult.data

    // 2. Create user
    const hashedPassword = await bcrypt.hash(password, 10)

    const data = await db
    .insert(users)
    .value({ name, email, password: hashedPassword })
    .returning({ id: users.id })

    const user = data[0]
    // 3. Create session
}