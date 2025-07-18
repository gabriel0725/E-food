class Restaurant {
  description: string
  image: string
  title: string
  infos: string[]
  rank: string
  id: number

  constructor(
    id: number,
    description: string,
    image: string,
    title: string,
    rank: string,
    infos: string[]
  ) {
    this.description = description
    this.id = id
    this.image = image
    this.title = title
    this.infos = infos
    this.rank = rank
  }
}

export default Restaurant
