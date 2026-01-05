import { Product, Clothing, Appliance } from '../../data/products.js';

describe('test suite: products.js', () => {
  it('create product object with correct properties', () => {
    const productDetails = {
      id: 'test-id',
      image: 'test-image.jpg',
      name: 'Test Product',
      rating: { stars: 4.5, count: 100 },
      priceCents: 1999,
      keywords: ['test', 'product']
    };

    const product = new Product(productDetails);

    expect(product.id).toBe('test-id');
    expect(product.image).toBe('test-image.jpg');
    expect(product.name).toBe('Test Product');
    expect(product.rating.stars).toBe(4.5);
    expect(product.rating.count).toBe(100);
    expect(product.priceCents).toBe(1999);
    expect(product.keywords).toEqual(['test', 'product']);
  });

  it('return correct star URL', () => {
    const productDetails = {
      id: 'test-id',
      image: 'test-image.jpg',
      name: 'Test Product',
      rating: { stars: 4.5, count: 100 },
      priceCents: 1999,
      keywords: ['test']
    };

    const product = new Product(productDetails);
    expect(product.getStarsUrl()).toBe('images/ratings/rating-45.png');
  });

  it('return correct price format', () => {
    const productDetails = {
      id: 'test-id',
      image: 'test-image.jpg',
      name: 'Test Product',
      rating: { stars: 4.0, count: 100 },
      priceCents: 1999,
      keywords: ['test']
    };

    const product = new Product(productDetails);
    expect(product.getPrice()).toBe('$19.99');
  });

  it('return empty string for extraInfoHTML', () => {
    const productDetails = {
      id: 'test-id',
      image: 'test-image.jpg',
      name: 'Test Product',
      rating: { stars: 4.0, count: 100 },
      priceCents: 1999,
      keywords: ['test']
    };

    const product = new Product(productDetails);
    expect(product.extraInfoHTML()).toBe('');
  });
});

describe('test suite: Clothing Class', () => {
  it('extend Product and have sizeChartLink', () => {
    const clothingDetails = {
      id: 'clothing-id',
      image: 'clothing-image.jpg',
      name: 'Test Clothing',
      rating: { stars: 4.0, count: 50 },
      priceCents: 2999,
      keywords: ['clothing', 'shirt'],
      sizeChartLink: 'images/clothing-size-chart.png'
    };

    const clothing = new Clothing(clothingDetails);

    expect(clothing.id).toBe('clothing-id');
    expect(clothing.name).toBe('Test Clothing');
    expect(clothing.priceCents).toBe(2999);

    expect(clothing.sizeChartLink).toBe('images/clothing-size-chart.png');
  });

  it('return correct star URL (inherited from Product)', () => {
    const clothingDetails = {
      id: 'clothing-id',
      image: 'clothing-image.jpg',
      name: 'Test Clothing',
      rating: { stars: 3.5, count: 50 },
      priceCents: 2999,
      keywords: ['clothing'],
      sizeChartLink: 'images/clothing-size-chart.png'
    };

    const clothing = new Clothing(clothingDetails);
    expect(clothing.getStarsUrl()).toBe('images/ratings/rating-35.png');
  });

  it('return correct price format (inherited from Product)', () => {
    const clothingDetails = {
      id: 'clothing-id',
      image: 'clothing-image.jpg',
      name: 'Test Clothing',
      rating: { stars: 4.0, count: 50 },
      priceCents: 2999,
      keywords: ['clothing'],
      sizeChartLink: 'images/clothing-size-chart.png'
    };

    const clothing = new Clothing(clothingDetails);
    expect(clothing.getPrice()).toBe('$29.99');
  });

  it('return size chart link in extraInfoHTML', () => {
    const clothingDetails = {
      id: 'clothing-id',
      image: 'clothing-image.jpg',
      name: 'Test Clothing',
      rating: { stars: 4.0, count: 50 },
      priceCents: 2999,
      keywords: ['clothing'],
      sizeChartLink: 'images/clothing-size-chart.png'
    };

    const clothing = new Clothing(clothingDetails);
    const html = clothing.extraInfoHTML();

    expect(html).toContain('<a href="images/clothing-size-chart.png"');
    expect(html).toContain('Size Chart');
  });
});

describe('test suite: Appliance Class', () => {
  it('extend Product and have instructionsLink and warrantyLink', () => {
    const applianceDetails = {
      id: 'appliance-id',
      image: 'appliance-image.jpg',
      name: 'Test Appliance',
      rating: { stars: 4.5, count: 25 },
      priceCents: 4999,
      keywords: ['appliance', 'kitchen'],
      instructionsLink: 'images/appliance-instructions.png',
      warrantyLink: 'images/appliance-warranty.png'
    };

    const appliance = new Appliance(applianceDetails);

    expect(appliance.id).toBe('appliance-id');
    expect(appliance.name).toBe('Test Appliance');
    expect(appliance.priceCents).toBe(4999);

    expect(appliance.instructionsLink).toBe('images/appliance-instructions.png');
    expect(appliance.warrantyLink).toBe('images/appliance-warranty.png');
  });

  it('return correct star URL (inherited from Product)', () => {
    const applianceDetails = {
      id: 'appliance-id',
      image: 'appliance-image.jpg',
      name: 'Test Appliance',
      rating: { stars: 4.5, count: 25 },
      priceCents: 4999,
      keywords: ['appliance'],
      instructionsLink: 'images/appliance-instructions.png',
      warrantyLink: 'images/appliance-warranty.png'
    };

    const appliance = new Appliance(applianceDetails);
    expect(appliance.getStarsUrl()).toBe('images/ratings/rating-45.png');
  });

  it('return correct price format (inherited from Product)', () => {
    const applianceDetails = {
      id: 'appliance-id',
      image: 'appliance-image.jpg',
      name: 'Test Appliance',
      rating: { stars: 4.5, count: 25 },
      priceCents: 4999,
      keywords: ['appliance'],
      instructionsLink: 'images/appliance-instructions.png',
      warrantyLink: 'images/appliance-warranty.png'
    };

    const appliance = new Appliance(applianceDetails);
    expect(appliance.getPrice()).toBe('$49.99');
  });

  it('return instructions and warranty links in extraInfoHTML', () => {
    const applianceDetails = {
      id: 'appliance-id',
      image: 'appliance-image.jpg',
      name: 'Test Appliance',
      rating: { stars: 4.5, count: 25 },
      priceCents: 4999,
      keywords: ['appliance'],
      instructionsLink: 'images/appliance-instructions.png',
      warrantyLink: 'images/appliance-warranty.png'
    };

    const appliance = new Appliance(applianceDetails);
    const html = appliance.extraInfoHTML();

    expect(html).toContain('<a href="images/appliance-instructions.png"');
    expect(html).toContain('Instructions');
    expect(html).toContain('<a href="images/appliance-warranty.png"');
    expect(html).toContain('Warranty');
  });
});
