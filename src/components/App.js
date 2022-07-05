import React, {useState, useEffect} from 'react';
import '../index.css';
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import {api} from "../utils/api";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import {Route, Routes} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import ProtectedRoute from "./ProtectedRoute";


function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isEditAvatarOpen, setIsEditAvatarOpen] = React.useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = React.useState(false);
  const [isAddPlaceOpen, setIsAddPlaceOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cards, setCards] = useState([]);


  useEffect(function() {
    api.getProfileInfo().then((userInfo) => {
      setCurrentUser(userInfo);
    }).catch((err) =>{console.log(err)});
  },[]);

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfileOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlaceOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarOpen(false);
    setIsEditProfileOpen(false);
    setIsAddPlaceOpen(false);
    setSelectedCard(null);
  }

  function handleUpdateUser(data) {
    api.patchProfile(data).then((res) => {
      setCurrentUser(res);
    }).catch((err) => {console.log(err)});
    closeAllPopups();
  }

  function handleUpdateAvatar(data) {
    api.editAvatar(data).then((res) => {
      setCurrentUser(res);
    }).catch((err) => {console.log(err)});
    closeAllPopups();
  }

  useEffect(function() {
    api.getCards().then((cards) => {
      setCards(cards);
    }).catch((err) =>{console.log(err)});
  },[]);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    }).catch((err) =>{console.log(err)});
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setCards((state) => state.filter((item) => item._id !== card._id));
    }).catch((err) =>{console.log(err)});
  }

  function handleAddPlaceSubmit(card) {
    api.addCard(card).then((newCard) => {
      setCards([newCard, ...cards]);
    }).catch((err) => {console.log(err)});
    closeAllPopups();
  }

  return (
      <CurrentUserContext.Provider value={currentUser}>
        <div className="background">
          <div className="page">
            <Header />
            <Routes>
              <Route path="/" element={
                  <ProtectedRoute>
                    <Main onEditProfile={handleEditProfileClick}
                          onAddPlace={handleAddPlaceClick}
                          onEditAvatar={handleEditAvatarClick}
                          onCardClick={handleCardClick}
                          cards={cards}
                          onCardLike={handleCardLike}
                          onCardDelete={handleCardDelete}/>
                  </ProtectedRoute>
              }/>

              <Route path="sign-up" element={<Register />} />
              <Route path="sign-in" element={<Login />}/>

            </Routes>

            <EditProfilePopup isOpen={isEditProfileOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
            <AddPlacePopup isOpen={isAddPlaceOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit}/>
            <PopupWithForm title='Вы уверены?' name='delete' />
            <EditAvatarPopup isOpen={isEditAvatarOpen} onOpen={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
            <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

            <Footer />
          </div>
        </div>
      </CurrentUserContext.Provider>
  );
}

export default App;
