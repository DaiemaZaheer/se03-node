const { sequelize, Sequelize } = require('../config/database');

const database = { sequelize, Sequelize };

// Models

const Region = require('./region.model')(sequelize, Sequelize);
const SubRegion = require('./subRegion.model')(sequelize, Sequelize);
const Country = require('./country.model')(sequelize, Sequelize);
const State = require('./state.model')(sequelize, Sequelize);
const City = require('./city.model')(sequelize, Sequelize);

const User = require('./user.model')(sequelize, Sequelize);
const UserRole = require('./userRole.model')(sequelize, Sequelize);
const Token = require('./token.model')(sequelize, Sequelize);
const Tenant = require('./tenant.model')(sequelize, Sequelize);
const NetworkServer = require('./networkServer.model')(sequelize, Sequelize);
const Package = require('./package.model')(sequelize, Sequelize);
const Franchise = require('./frunchise.model')(sequelize, Sequelize);
const Dealer = require('./dealer.model')(sequelize, Sequelize);
const Customer = require('./customer.model')(sequelize, Sequelize);
const CustomerSubscription = require('./customerSubscription.model')(sequelize, Sequelize);

// Association

Region.hasMany(SubRegion, { foreignKey: 'regionId'});
SubRegion.belongsTo(Region);
SubRegion.hasMany(Country, { foreignKey: 'subRegionId'});
Country.belongsTo(SubRegion);
Country.hasMany(State, { foreignKey: 'countryId'});
State.belongsTo(Country);
State.hasMany(City, { foreignKey: 'stateId'});
City.belongsTo(State);

User.hasMany(Token, { foreignKey: 'userId'});
Token.belongsTo(User);
User.hasMany(UserRole, { foreignKey: 'userId'});
UserRole.belongsTo(User);
Tenant.hasMany(NetworkServer, { foreignKey: 'tenantId'});
NetworkServer.belongsTo(Tenant);
Tenant.hasMany(Package, { foreignKey: 'tenantId'});
Package.belongsTo(Tenant);
Tenant.hasMany(Franchise, { foreignKey: 'tenantId'});
Franchise.belongsTo(Tenant);
// NetworkServer.belongsTo(Franchise, {foreignKey: 'networkServerId'});
Franchise.hasMany(Dealer, { foreignKey: 'franchiseId'});
Dealer.belongsTo(Franchise);
Dealer.hasMany(Customer, { foreignKey: 'dealerId'});
Customer.belongsTo(Dealer);
Customer.hasMany(CustomerSubscription, { foreignKey: 'customerId'});
CustomerSubscription.belongsTo(Customer);

const models = {
    Region,
    SubRegion,
    Country,
    State,
    City,

    User,
    UserRole,
    Token,
    Tenant,
    NetworkServer,
    Package,
    Franchise,
    Dealer,
    Customer,
    CustomerSubscription
};


module.exports = {...database, ...models};
