class Token < ApplicationRecord
  after_initialize :set_defaults

  def set_defaults
    return unless new_record?

    self.uuid = SecureRandom.uuid
    self.token_hash = create_hash_digest
  end

  def verify(key)
    verify_hash_digest(token_hash) == key
  end

  private

  def create_hash_digest
    BCrypt::Password.create(uuid)
  end

  def verify_hash_digest(hash)
    BCrypt::Password.new(hash)
  end
end

# notes:
# - need to add a field for UUID otherwise how do you look it up if it's always hashed
# - need to expire tokens in a job
