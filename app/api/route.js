
import db from '@/db/db'
import { NextResponse } from 'next/server'

db()
export async function GET(request) {
  return NextResponse.json({msg:"api base" })
}
