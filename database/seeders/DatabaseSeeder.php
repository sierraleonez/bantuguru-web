<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        Category::create(['name' => 'IPA', 'type' => 'subject']);
        Category::create(['name' => 'Matematika', 'type' => 'subject']);
        Category::create(['name' => 'Bahasa Inggris', 'type' => 'subject']);

        Category::create(['name' => 'Kelas 7', 'type' => 'class']);
        Category::create(['name' => 'Kelas 8', 'type' => 'class']);
        Category::create(['name' => 'Kelas 9', 'type' => 'class']);

        Category::create(['name' => 'Modul Ajar', 'type' => 'type']);
        Category::create(['name' => 'LKPD', 'type' => 'type']);
        Category::create(['name' => 'Asesmen', 'type' => 'type']);
        Category::create(['name' => 'Administrasi', 'type' => 'type']);

        $products = [
            ['name' => 'Keanekaragaman Hayati Kelas 7 Sem 2', 'type' => 'Modul Ajar', 'kelas' => 'Kelas 7', 'subject' => 'IPA', 'price' => 10000, 'icon' => '📘', 'desc' => 'Modul ajar lengkap materi Keanekaragaman Hayati untuk Kelas 7 Semester 2. Dilengkapi dengan RPP, materi ajar, dan lembar evaluasi.'],
            ['name' => 'Keanekaragaman Hayati Kelas 7 Sem 2', 'type' => 'Asesmen', 'kelas' => 'Kelas 7', 'subject' => 'IPA', 'price' => 10000, 'icon' => '📋', 'desc' => 'Paket asesmen formatif dan sumatif Keanekaragaman Hayati Kelas 7. Terdiri dari kisi-kisi, soal, dan rubrik penilaian.'],
            ['name' => 'Keanekaragaman Hayati Kelas 7 Sem 2', 'type' => 'LKPD', 'kelas' => 'Kelas 7', 'subject' => 'IPA', 'price' => 10000, 'icon' => '📄', 'desc' => 'Lembar Kerja Peserta Didik (LKPD) interaktif berbasis penemuan untuk materi Keanekaragaman Hayati.'],
            ['name' => 'PROTA IPA Kelas 7', 'type' => 'Administrasi', 'kelas' => 'Kelas 7', 'subject' => 'IPA', 'price' => 25000, 'icon' => '📁', 'desc' => 'Program Tahunan (PROTA) IPA Kelas 7 lengkap sesuai Kurikulum Merdeka. Siap edit dan print.'],
            ['name' => 'Persamaan Linear Satu Variabel Kelas 7', 'type' => 'Modul Ajar', 'kelas' => 'Kelas 7', 'subject' => 'Matematika', 'price' => 10000, 'icon' => '📘', 'desc' => 'Modul ajar Matematika topik PLSV untuk Kelas 7, lengkap dengan contoh soal dan latihan terstruktur.'],
            ['name' => 'Penilaian Matematika Kelas 8 Sem 1', 'type' => 'Asesmen', 'kelas' => 'Kelas 8', 'subject' => 'Matematika', 'price' => 12000, 'icon' => '📋', 'desc' => 'Paket soal ulangan harian dan tengah semester Matematika Kelas 8 Semester 1.'],
            ['name' => 'Teks Deskriptif Bahasa Inggris Kelas 7', 'type' => 'LKPD', 'kelas' => 'Kelas 7', 'subject' => 'Bahasa Inggris', 'price' => 10000, 'icon' => '📄', 'desc' => 'LKPD Bahasa Inggris topik Descriptive Text untuk Kelas 7 dengan panduan writing step-by-step.'],
            ['name' => 'PROTA Matematika Kelas 8', 'type' => 'Administrasi', 'kelas' => 'Kelas 8', 'subject' => 'Matematika', 'price' => 25000, 'icon' => '📁', 'desc' => 'Program Tahunan Matematika Kelas 8 sesuai Kurikulum Merdeka, sudah termasuk PROMES.'],
            ['name' => 'Simple Present Tense Kelas 7', 'type' => 'Modul Ajar', 'kelas' => 'Kelas 7', 'subject' => 'Bahasa Inggris', 'price' => 10000, 'icon' => '📘', 'desc' => 'Modul ajar Simple Present Tense untuk Kelas 7 dengan pendekatan communicative approach.'],
            ['name' => 'Getaran & Gelombang Kelas 8', 'type' => 'LKPD', 'kelas' => 'Kelas 8', 'subject' => 'IPA', 'price' => 10000, 'icon' => '📄', 'desc' => 'LKPD berbasis eksperimen untuk materi Getaran dan Gelombang Kelas 8 Semester 1.'],
            ['name' => 'PROTA Bahasa Inggris Kelas 9', 'type' => 'Administrasi', 'kelas' => 'Kelas 9', 'subject' => 'Bahasa Inggris', 'price' => 25000, 'icon' => '📁', 'desc' => 'Program Tahunan Bahasa Inggris Kelas 9 Kurikulum Merdeka lengkap dengan pemetaan KD.'],
            ['name' => 'Asesmen Kelas 9 Matematika', 'type' => 'Asesmen', 'kelas' => 'Kelas 9', 'subject' => 'Matematika', 'price' => 15000, 'icon' => '📋', 'desc' => 'Paket asesmen akhir semester Matematika Kelas 9, dilengkapi kunci jawaban dan pedoman penilaian.'],
        ];

        foreach ($products as $data) {
            Product::create([
                'name' => $data['name'],
                'price' => $data['price'],
                'icon' => $data['icon'],
                'kelas' => $data['kelas'],
                'subject' => $data['subject'],
                'type' => $data['type'],
                'description' => $data['desc'],
                'is_active' => true,
            ]);
        }
    }
}
