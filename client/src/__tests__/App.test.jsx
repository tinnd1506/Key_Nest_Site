import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import store from '../store/store';

describe('App Component', () => {
  // Arrange
  const MockHeader = () => <div>Mock Header</div>;
  const MockFooter = () => <div>Mock Footer</div>;
  const MockHomeBanner = () => <div>Mock HomeBanner</div>;
  const MockCard = () => <div>Mock Card</div>;
  
  const renderApp = () => render(
    <Provider store={store}>
      <App 
        Header={MockHeader}
        Footer={MockFooter}
        HomeBanner={MockHomeBanner}
        Card={MockCard}
      />
    </Provider>
  );

  test('renders without crashing', () => {
    // Act
    const { container } = renderApp();
    
    // Assert
    expect(container).toBeInTheDocument();
  });

  test('renders with Redux Provider', () => {
    // Act
    const { container } = renderApp();
    
    // Assert
    expect(container.querySelector('.App')).toBeInTheDocument();
  });

  test('contains main routes', () => {
    // Act
    const { getByText } = renderApp();
    
    // Assert
    expect(getByText(/Mock Header/i)).toBeInTheDocument();
    expect(getByText(/Mock Footer/i)).toBeInTheDocument();
  });
});
