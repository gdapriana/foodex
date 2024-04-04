export const categoryCard = (category) => {
  const wrapper = document.createElement('article');
  const title = document.createElement('h3');
  const desc = document.createElement('p');

  wrapper.classList.add('category-card');
  title.classList.add('category-title');
  desc.classList.add('category-desc');

  wrapper.setAttribute(
    'style',
    `
              background: linear-gradient(
                  rgba(0, 0, 0, 0.6),
                  rgba(0, 0, 0, 0.6)
                ),
                url('https://source.unsplash.com/random/1920×1080/?${category.title}&orientation=landscape');
  `,
  );

  wrapper.setAttribute('tabindex', '0');

  title.innerHTML = category.title;
  title.setAttribute('tabindex', '0');
  desc.innerHTML = category.description;
  desc.setAttribute('tabindex', '0');
  wrapper.append(title, desc);
  return wrapper;
};
