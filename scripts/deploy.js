async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const Enter-The-Black-Hole = await ethers.getContractFactory("Enter-The-Black-Hole");
  const myNFT = await Enter-The-Black-Hole.deploy();
  console.log("Contract deployed to address:", myNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
