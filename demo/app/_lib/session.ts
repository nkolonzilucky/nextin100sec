import { SignJWT, jwtVerify } from 'jose'
import { redirect } from 'next/dist/server/api-utils'
import { cookies } from 'next/headers'

const key = new TextEncoder().encode(process.env.sECRET)

const cookie = {
    name: 'session',
    options: { httpOnly: true, secure: true, sameSite: 'lax', path: '/' },
    duration: 24 * 60 * 60 * 1000
}

export async function encrypt(payload) {
    return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1day')
    .sign(key)
}

export async function decrypt(session) {
    try {
        const { payload } = await jwtVerify(session, key, {
            algorithms: ['HS256'],
        })
        return payload
    } catch (error) {
        return null
    }
}
export async function createSession(userId) {
    const expires = new Date(Date.now() + cookie.duration)
    const session = await encrypt({ userId, expires })

    cookies().set(cookie.name, session, { ...cookie.options, expires })
    redirect('/dashboard')
}
export async function verifySession() {}
export async function deleteSession() {}