async function main() {
  const [deployer] = await ethers.getSigners();
  const Enter-The-Black-Hole = await ethers.getContractFactory("Enter-The-Black-Hole");
  const myNFT = Enter-The-Black-Hole.attach("0xb927d18b388552a96930935d81edefa5fb140d1b");

  const tx = await myNFT.createNFT();
  await tx.wait();

  console.log("NFT minted!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
