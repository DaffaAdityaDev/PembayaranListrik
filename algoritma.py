numbers = []

def display_menu():
    print("MENU PILIHAN")
    print("1. Input angka")
    print("2. Sorting")
    print("3. Searching")
    print("4. Selesai")
    choice = input("Masukkan pilihan [1/2/3/4]: ")
    handle_menu_choice(choice)

def handle_menu_choice(choice):
    if choice == "1":
        handle_input()
    elif choice == "2":
        handle_sorting()
    elif choice == "3":
        handle_searching()
    elif choice == "4":
        print("Program selesai")
    else:
        print("Pilihan tidak valid")
        display_menu()

def handle_input():
    count = int(input("Masukkan jumlah nilai tugas: "))
    for i in range(count):
        number = int(input(f"Angka {i+1}: "))
        numbers.append(number)
    display_menu()

def handle_sorting():
    sorted_numbers = sorted(numbers)
    print("TAMPIL HASIL SORTING")
    print("Hasil sorting:", ", ".join(str(num) for num in sorted_numbers))
    display_menu()

def handle_searching():
    search_number = int(input("Masukkan angka yang dicari: "))
    if search_number in numbers:
        print("TAMPIL HASIL SEARCHING")
        print("Angka ditemukan")
    else:
        print("TAMPIL HASIL SEARCHING")
        print("Angka tidak ditemukan")
    display_menu()

display_menu()

"""
Table penggunaan
PK id_penggunaan
    id_pelanggan
    bulan
    tahun
    meter_awal
    meter_akhir

Table tagihan
PK id_tagihan
    id_penggunaan
    id_pelanggan
    bulan
    tahun
    jumlah_meter
    status

Table pelanggan
PK id_pelanggan
    username
    password
    nomor_kwh
    nama_pelanggan
    alamat
    id_tarif

Table Pembayaran
PK id_pembayaran
    id_tagihan
    id_pelanggan
    tanggal_pembayaran
    bulan_bayar
    biaya_admin
    total_bayar
    id_user

Table tarif
Pk id_tarif
    daya
    tarifPerKwh

Table user
Pk id_user
    username
    password   
    nama_admin
    id_level

Table level 
PK id_level
    nama_level

"""

# -- Table penggunaan
# CREATE TABLE penggunaan (
#     id_penggunaan INT PRIMARY KEY,
#     id_pelanggan INT,
#     bulan INT,
#     tahun INT,
#     meter_awal DECIMAL(10, 2),
#     meter_akhir DECIMAL(10, 2),
#     FOREIGN KEY (id_pelanggan) REFERENCES pelanggan(id_pelanggan)
# );

# -- Table tagihan
# CREATE TABLE tagihan (
#     id_tagihan INT PRIMARY KEY,
#     id_penggunaan INT,
#     id_pelanggan INT,
#     bulan INT,
#     tahun INT,
#     jumlah_meter DECIMAL(10, 2),
#     status VARCHAR(50),
#     FOREIGN KEY (id_penggunaan) REFERENCES penggunaan(id_penggunaan),
#     FOREIGN KEY (id_pelanggan) REFERENCES pelanggan(id_pelanggan)
# );

# -- Table pelanggan
# CREATE TABLE pelanggan (
#     id_pelanggan INT PRIMARY KEY,
#     username VARCHAR(50),
#     password VARCHAR(50),
#     nomor_kwh VARCHAR(50),
#     nama_pelanggan VARCHAR(100),
#     alamat VARCHAR(200),
#     id_tarif INT,
#     FOREIGN KEY (id_tarif) REFERENCES tarif(id_tarif)
# );

# -- Table pembayaran
# CREATE TABLE pembayaran (
#     id_pembayaran INT PRIMARY KEY,
#     id_tagihan INT,
#     id_pelanggan INT,
#     tanggal_pembayaran DATE,
#     bulan_bayar INT,
#     biaya_admin DECIMAL(10, 2),
#     total_bayar DECIMAL(10, 2),
#     id_user INT,
#     FOREIGN KEY (id_tagihan) REFERENCES tagihan(id_tagihan),
#     FOREIGN KEY (id_pelanggan) REFERENCES pelanggan(id_pelanggan),
#     FOREIGN KEY (id_user) REFERENCES user(id_user)
# );

# -- Table tarif
# CREATE TABLE tarif (
#     id_tarif INT PRIMARY KEY,
#     daya INT,
#     tarifPerKwh DECIMAL(10, 2)
# );

# -- Table user
# CREATE TABLE user (
#     id_user INT PRIMARY KEY,
#     username VARCHAR(50),
#     password VARCHAR(50),
#     nama_admin VARCHAR(100),
#     id_level INT,
#     FOREIGN KEY (id_level) REFERENCES level(id_level)
# );

# -- Table level
# CREATE TABLE level (
#     id_level INT PRIMARY KEY,
#     nama_level VARCHAR(50)
# );

