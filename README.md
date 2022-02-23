# pairProject1
halaman home/login user kalau berhasil masuk ke halaman belanja
kalau error, atau belum ada akun bikin akun
jika sukses bikin akun, arahkan ke halaman belanja ,

halaman landing page (/) GET
login
form 
    text, email
    text password
    button sumbit (/store) => halaman belanja
.    button create account (/createaccount) => tampilkan form

jika error = invalid email / password arahkan ke ejs error
jika error = tidak punya akun arahkan ke form create account


navbar (header kecuali di landing page)
search, sort(price, ASC / DESC) , filter(style, Short Sleve, Long Sleve), profile, cart, logout

halaman profile
name
addres

halaman belanja

item dalam bentuk CARD
name (vr)
style (vr)
stock (int)
price (int)
picture (vr)
CRUD = add to cart (create)

shopping cart
-tampilkan data item yang masuk ke dalam cart
nama , qty, price, totalprice, 
button add dan delete

checkout redirect ke halaman baru dengan hasil total belanja
button untuk kembali ke halaman belanja 
