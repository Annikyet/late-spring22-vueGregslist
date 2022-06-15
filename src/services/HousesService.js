import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class HousesService {
  async getAll() {
    const res = await api.get('api/houses')
    AppState.houses = res.data
    console.log(res.data)
  }

  async create() {

  }

  async edit() {

  }

  async remove() {

  }
}

export const housesService = new HousesService()