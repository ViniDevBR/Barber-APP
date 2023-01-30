//EXPRESS
import { Router } from 'express'
//USE CASES - GET
import { listClient } from './useCases/Clients/listClients'
import { listMoney } from './useCases/Money/listMoney'
import { listServices } from './useCases/Services/listServices'
//USE CASES - POST
import { createClient } from './useCases/Clients/createClient'
import { createRegisterOfMoney } from './useCases/Money/createRegisterOfMoney'
import { createService } from './useCases/Services/createService'
import { updateMoney } from './useCases/Money/updateMoney'
//USE CASES - DELETE
import { deleteClient } from './useCases/Clients/deleteClient'
import { deleteServices } from './useCases/Services/deleteService'


export const router = Router()

//CREATE SERVICE
router.post('/services', createService)
//LIST SERVICES
router.get('/services', listServices)
//DELETE SERVICE
router.delete('/services/:id', deleteServices)

//CREATE CLIENT
router.post('/clients', createClient)
//LIST CLIENT
router.get('/clients', listClient)
//DELETE CLIENT
router.delete('/clients/:id', deleteClient)

//CREATE MONEY
router.post('/money', createRegisterOfMoney)
//LIST MONEY
router.get('/money', listMoney)
//UPDATE MONEY
router.put('/money', updateMoney)
