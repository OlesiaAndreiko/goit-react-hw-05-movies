import * as ImageService from '../../api-service/film-service';

export const GallaryTrenging = () => {
//   const fetchData = async () => {
//     try {
//       const data = await ImageService.getTrandingMovies();
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   fetchData();

  ImageService.getTrandingMovies().then(data =>
      console.log(data)
  )
};
