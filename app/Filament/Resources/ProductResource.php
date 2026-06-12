<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProductResource\Pages;
use App\Models\Product;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\Action;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Illuminate\Support\Facades\Storage;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Filters\TernaryFilter;
use Filament\Tables\Table;

class ProductResource extends Resource
{
    protected static ?string $model = Product::class;

    protected static string | \BackedEnum | null $navigationIcon = 'heroicon-o-cube';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->required()
                    ->maxLength(255),
                TextInput::make('price')
                    ->required()
                    ->numeric()
                    ->prefix('Rp'),
                TextInput::make('icon')
                    ->maxLength(50),
                Select::make('kelas')
                    ->options([
                        'Kelas 7' => 'Kelas 7',
                        'Kelas 8' => 'Kelas 8',
                        'Kelas 9' => 'Kelas 9',
                    ])
                    ->native(false),
                Select::make('subject')
                    ->options([
                        'IPA' => 'IPA',
                        'Matematika' => 'Matematika',
                        'Bahasa Inggris' => 'Bahasa Inggris',
                    ])
                    ->native(false),
                Select::make('type')
                    ->options([
                        'Modul Ajar' => 'Modul Ajar',
                        'LKPD' => 'LKPD',
                        'Asesmen' => 'Asesmen',
                        'Administrasi' => 'Administrasi',
                    ])
                    ->native(false),
                Textarea::make('description')
                    ->maxLength(65535)
                    ->columnSpanFull(),
                FileUpload::make('file_path')
                    ->label('File')
                    ->disk('local')
                    ->directory('products')
                    ->acceptedFileTypes([
                        'application/pdf',
                        'application/msword',
                        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                        'application/vnd.ms-excel',
                        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                        'application/vnd.ms-powerpoint',
                        'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                    ])
                    ->maxSize(10240),
                Toggle::make('is_active')
                    ->required()
                    ->default(true),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')
                    ->searchable()
                    ->limit(40),
                TextColumn::make('icon')
                    ->searchable(),
                TextColumn::make('kelas')
                    ->badge()
                    ->color('gray'),
                TextColumn::make('subject')
                    ->badge(),
                TextColumn::make('type')
                    ->badge()
                    ->color('warning'),
                TextColumn::make('price')
                    ->money('IDR')
                    ->sortable(),
                IconColumn::make('file_path')
                    ->label('File')
                    ->boolean()
                    ->toggleable(),
                IconColumn::make('is_active')
                    ->boolean()
                    ->sortable(),
            ])
            ->filters([
                SelectFilter::make('kelas')
                    ->options(['Kelas 7', 'Kelas 8', 'Kelas 9']),
                SelectFilter::make('subject')
                    ->options(['IPA', 'Matematika', 'Bahasa Inggris']),
                SelectFilter::make('type')
                    ->options(['Modul Ajar', 'LKPD', 'Asesmen', 'Administrasi']),
                TernaryFilter::make('is_active'),
            ])
            ->actions([
                Action::make('download')
                    ->icon('heroicon-o-arrow-down-tray')
                    ->color('gray')
                    ->action(fn (Product $record) => Storage::disk('local')->download($record->file_path))
                    ->visible(fn (Product $record) => filled($record->file_path)),
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->bulkActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProducts::route('/'),
            'create' => Pages\CreateProduct::route('/create'),
            'edit' => Pages\EditProduct::route('/{record}/edit'),
        ];
    }
}
