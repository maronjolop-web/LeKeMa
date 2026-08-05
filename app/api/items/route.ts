import { readFile, writeFile } from 'fs/promises'
import { resolve } from 'path'
import { NextRequest, NextResponse } from 'next/server'

const dataFile = resolve(process.cwd(), 'data', 'items.json')

async function getItems() {
  try {
    const content = await readFile(dataFile, 'utf-8')
    return JSON.parse(content)
  } catch {
    return []
  }
}

async function saveItems(items: any[]) {
  await writeFile(dataFile, JSON.stringify(items, null, 2))
}

export async function GET() {
  const items = await getItems()
  return NextResponse.json(items)
}

export async function POST(req: NextRequest) {
  const items = await getItems()
  const newItem = await req.json()
  newItem.id = String(Math.max(...items.map(i => parseInt(i.id) || 0), 0) + 1)
  items.push(newItem)
  await saveItems(items)
  return NextResponse.json(newItem, { status: 201 })
}

export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')
  let items = await getItems()
  items = items.filter(i => i.id !== id)
  await saveItems(items)
  return NextResponse.json({ ok: true })
}
