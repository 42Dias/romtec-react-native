import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

export const token = AsyncStorage.getItem('token')/*.toString()?.replace(/"/g, '')*/
export const tenantId = AsyncStorage.getItem('tenantId')/*?.replace(/"/g, '')*/
export const roles = AsyncStorage.getItem('roles')/*?.replace(/"/g, '')*/
export const id = AsyncStorage.getItem('id')/*?.replace(/"/g, '')*/
export const idPessoa = AsyncStorage.getItem('idPessoa')/*?.replace(/"/g, '')*/
export const status = AsyncStorage.getItem('status')/*?.replace(/"/g, '')*/
export const Email = AsyncStorage.getItem('email')/*?.replace(/"/g, '')*/
export const nome = AsyncStorage.getItem('nome')/*?.replace(/"/g, '')*/
export const password = AsyncStorage.getItem('password')/*?.replace(/"/g, '')*/
//export const ip = 'http://localhost' 
export let ip = "https://projetos.42dias.com.br";//servidor 

export const api = axios.create({
  baseURL: ip + ':8145/api/tenant/' + tenantId + '/',
  timeout: 50000,
  headers: { Authorization: 'Bearer ' + token },
})
