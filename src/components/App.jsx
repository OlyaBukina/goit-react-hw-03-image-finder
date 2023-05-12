import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container } from './Container.styled';
import { GlobalStyle } from '../GlobalStyles';
import { Searchbar } from './Searchbar/Searchbar';
import { getImages } from '../services/getImages';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMoreBtn } from './Button/Button';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    query: '',
    images: [],
    showBtn: false,
    page: 1,
    isLoading: false,
  };

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (page !== prevState.page || query !== prevState.query) {
      try {
        this.setState({ isLoading: true, showBtn: false });

        const response = await getImages(query, page);

        if (response.hits.length === 0) {
          this.setState({ isLoading: false });
          toast.error(
            'Sorry, there are no images matching your search query. Please try again.'
          );
          return;
        }
        this.updateImages(response.hits);

      } catch (error) {
        this.setState({ isLoading: false });
        toast.error(error.message);
      }
    }
  }
  updateImages(newImages) {
    const { images } = this.state;
    this.setState({
      images: [...images, ...newImages],
      isLoading: false,
      showBtn: newImages.length > 11,
    });
  }
  getQuery = ({ query }) => {
    this.setState({ query: query.trim(), images: [], showBtn: false });
  };

  incrementPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, showBtn, isLoading } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.getQuery} />

        <ImageGallery images={images} onImageClick={this.toggleModal} />
        {isLoading && <Loader />}
        {showBtn && <LoadMoreBtn incrementPage={this.incrementPage} />}

        <ToastContainer />
        <GlobalStyle />
      </Container>
    );
  }
}
