import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nama, alamat, jumlah, minuman, pembayaran } = body;

    if (!nama || !alamat || !jumlah || !minuman || !pembayaran) {
      return NextResponse.json({ error: 'Field tidak lengkap' }, { status: 400 });
    }

    const pesanan = await prisma.pesanan.create({
      data: {
        nama,
        alamat,
        jumlah,
        minuman,
        pembayaran,
      },
    });

    return NextResponse.json(pesanan, { status: 201 });
  } catch (error) {
    console.error('POST /api/pesanan error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
