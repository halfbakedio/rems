# Interface to Clerk user
class User
  attr_reader :id

  # Create an instance of a user as an Interface to Clerk.
  #
  # @param [String] id The Clerk user id
  #
  # @return [User] The user instance
  def initialize(id)
    @id = id
  end

  def update(input); end

  def destroy(id); end

  def self.find(id); end

  def self.search(query); end

  def self.create(input); end

  def self.list; end
end
