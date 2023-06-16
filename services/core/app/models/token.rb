class Token < ApplicationRecord
  attr_accessor :token

  after_initialize :set_defaults

  def set_defaults
    @token = SecureRandom.uuid
    self.hash = create_hash_digest
  end

  def verify(key)
    verify_hash_digest(hash) == key
  end

  private

  def create_hash_digest
    BCrypt::Password.create(token)
  end

  def verify_hash_digest(hash)
    BCrypt::Password.new(hash)
  end
end
