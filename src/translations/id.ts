import { ErrorCodesType } from "../types";

export const ID_ID = {
	// User related errors
	USER_NOT_FOUND: "Pengguna tidak ditemukan",
	FAILED_TO_CREATE_USER: "Gagal membuat pengguna",
	FAILED_TO_UPDATE_USER: "Gagal memperbarui pengguna",
	USER_ALREADY_EXISTS: "Pengguna sudah ada",
	USER_EMAIL_NOT_FOUND: "Email pengguna tidak ditemukan",
	USER_ALREADY_HAS_PASSWORD: "Pengguna sudah memiliki kata sandi. Gunakan kata sandi sebelumnya untuk menghapus akun.",

	// Session related errors
	FAILED_TO_CREATE_SESSION: "Gagal membuat sesi",
	FAILED_TO_GET_SESSION: "Gagal mendapatkan sesi",
	SESSION_EXPIRED: "Sesi telah kedaluwarsa. Silakan autentikasi ulang untuk melanjutkan.",

	// Authentication errors
	INVALID_PASSWORD: "Kata sandi tidak valid",
	INVALID_EMAIL: "Alamat email tidak valid",
	INVALID_EMAIL_OR_PASSWORD: "Email atau kata sandi salah",
	INVALID_TOKEN: "Token tidak valid",
	EMAIL_NOT_VERIFIED: "Email belum diverifikasi",
	CREDENTIAL_ACCOUNT_NOT_FOUND: "Tidak ditemukan kredensial akun",

	// Password related errors
	PASSWORD_TOO_SHORT: "Kata sandi terlalu pendek",
	PASSWORD_TOO_LONG: "Kata sandi terlalu panjang",

	// Social auth errors
	SOCIAL_ACCOUNT_ALREADY_LINKED: "Akun sosial ini sudah terhubung",
	PROVIDER_NOT_FOUND: "Penyedia tidak ditemukan",
	ID_TOKEN_NOT_SUPPORTED: "`id_token` tidak didukung",
	FAILED_TO_GET_USER_INFO: "Gagal mengambil informasi pengguna",

	// Account management errors
	EMAIL_CAN_NOT_BE_UPDATED: "Alamat email tidak dapat diperbarui",
	FAILED_TO_UNLINK_LAST_ACCOUNT: "Anda tidak dapat menghapus tautan akun terakhir Anda",
	ACCOUNT_NOT_FOUND: "Akun tidak ditemukan",
} satisfies ErrorCodesType;
