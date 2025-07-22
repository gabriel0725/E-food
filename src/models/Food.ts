class Food {
  description: string
  image: string
  title: string
  id: number

  constructor(id: number, description: string, image: string, title: string) {
    this.description = description
    this.id = id
    this.image = image
    this.title = title
  }
}

export default Food
