import { defineQuery } from "next-sanity";


export const PAGE_QUERY =
  defineQuery(`*[_type == "page" && slug.current == $slug][0]{
  ...,
  content[]{
    ...,
    _type == "faqs" => {
      ...,
      faqs[]->
    }
  }
}`);

export const HOME_PAGE_QUERY = defineQuery(
  `
  *[_id == "siteSettings"][0]{
  homePage->{
    ...,
    content[] {
      ...,
      _type == "faqs" => {
        ...,
        faqs[]->
      },
      _type == "iconCards" => {
        ...,
        iconCardCombo-> // already correct for iconCards
      },
      _type == "imageCards" => {
        ...,
        imageCardCombo->
      }
    }
  }
}

  `
)

export const PROJECT_QUERY = defineQuery(
  `
 *[_type == "projectType"]{
  _id,
  projectTitle,
  "slug": slug.current,
  projectDisplayImage,
  projectImageGallery
}
`
)

