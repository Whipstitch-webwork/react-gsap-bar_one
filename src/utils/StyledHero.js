import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const StyledHero = ({fluid, className, children}) => {
    return (
       
            <BackgroundImage className={className} fluid={fluid} >
                {children}
            </BackgroundImage>       
    )
}
export default styled(StyledHero)`
height:100vh;
background-position:center;
background-size: cover;
background-repeat: no-repeat;
`
//  **************graphql QUERY FROM RELATIVE PATH**************
// const getImages = graphql`
// query{
//     BackgroundImage:file(relativePath:{eq:"01.jpg"}){
//         childImageSharp{
//             fluid(quality:100 maxWidth:4160){
//                 ...GatsbyImageSharpFluid_withWebp
//             }
//         }
//     }   
// }
// `
// **************CONST FO9R HOOK**********************
// const data = useStaticQuery(getImages)

// ******************USAGE*************************
// import {graphql, useStaticQuery} from 'gatsby'
// import StyledHero from './StyledHero'
// <StyledHero className="styledHero" fluid={data.BackgroundImage.childImageSharp.fluid} alt="DESCRIPTION" home="home">