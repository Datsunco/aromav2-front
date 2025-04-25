import { IconProps } from "types/icon"

const Check = ({
  size = "24",
  color = "currentColor",
  ...attributes
}: IconProps) => {
  return (
    // <svg
    //   aria-hidden="true"
    //   width={size}
    //   height={size}
    //   xmlns="http://www.w3.org/2000/svg"
    //   className="story-detail__quote icon sprite-icons"
    //   {...attributes}
    // >
    //   <use
    //     href="/_nuxt/79fa9989ac0afe9c7e4191280ac5de5f.svg#i-icon-quote"
    //     xlinkHref="/_nuxt/79fa9989ac0afe9c7e4191280ac5de5f.svg#i-icon-quote"
    //   />
    //   <svg
    //     xmlns="http://www.w3.org/2000/svg"
    //     id="i-icon-quote"
    //     fill="none"
    //     viewBox="0 0 24 24"
    //   >
    //     <path
    //       fill="currentColor"
    //       d="M20.308 17.707c1.887-2.048 1.697-4.678 1.691-4.708v-8a1 1 0 00-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 001 1h3.078a2.89 2.89 0 01-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16v2.82h1c2.783 0 4.906-.771 6.31-2.292zm-11.007 0c1.888-2.048 1.697-4.678 1.691-4.708v-8a1 1 0 00-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 001 1H6.07a2.89 2.89 0 01-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16v2.82h1c2.783 0 4.906-.771 6.31-2.292z"
    //     />
    //   </svg>
    // </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...attributes}
    >
      <path d="M20 6 9 17l-5-5"></path>
    </svg>
  )
}

export default Check
