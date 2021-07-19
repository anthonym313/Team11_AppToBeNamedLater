from .db import db


class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer)
    image_id = db.Column(db.Integer)
    comment = db.Column(db.TEXT)

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'image_id': self.image_id,
            'comment': self.comment,
            'createdAt': self.created_at.strftime('%m-%d-%Y'),
        }
