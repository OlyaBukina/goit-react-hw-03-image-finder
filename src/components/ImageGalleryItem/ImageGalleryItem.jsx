import PropTypes  from 'prop-types';
import { Component } from 'react';
import { GalleryImage, GalleryItem } from './ImageGalleryItem.styled';
import { Modal } from '../Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };


  render() {
    const { largeImageURL, webformatURL, tags } = this.props.image;
    return (
      <>
        {this.state.showModal && (
          <Modal
            onClose={this.toggleModal}
            bigImage={largeImageURL}
            alt={tags}
          />
        )}
        <GalleryItem onClick={this.toggleModal}>
          <GalleryImage src={webformatURL} alt={tags} />
        </GalleryItem>
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
};
