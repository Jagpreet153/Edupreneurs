exports.logout = (req,res) => {
    try {
      res.clearCookie("token");
      res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
};
  