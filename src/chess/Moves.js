import blackBishop from "../../assets/chess_piece_2_black_bishop.png";
import blackKing from "../../assets/chess_piece_2_black_king.png";
import blackKnight from "../../assets/chess_piece_2_black_knight.png";
import blackPawn from "../../assets/chess_piece_2_black_pawn.png";
import blackQueen from "../../assets/chess_piece_2_black_queen.png";
import blackRook from "../../assets/chess_piece_2_black_rook.png";
import whiteBishop from "../../assets/chess_piece_2_white_bishop.png";
import whiteKing from "../../assets/chess_piece_2_white_king.png";
import whiteKnight from "../../assets/chess_piece_2_white_knight.png";
import whitePawn from "../../assets/chess_piece_2_white_pawn.png";
import whiteQueen from "../../assets/chess_piece_2_white_queen.png";
import whiteRook from "../../assets/chess_piece_2_white_rook.png";

export const reset = {
  AA: blackRook,
  AH: blackRook,
  AB: blackKnight,
  AG: blackKnight,
  AC: blackBishop,
  AF: blackBishop,
  AD: blackKing,
  AE: blackQueen,
  BA: blackPawn,
  BB: blackPawn,
  BC: blackPawn,
  BD: blackPawn,
  BE: blackPawn,
  BF: blackPawn,
  BG: blackPawn,
  BH: blackPawn,
  GA: whitePawn,
  GB: whitePawn,
  GC: whitePawn,
  GD: whitePawn,
  GE: whitePawn,
  GF: whitePawn,
  GG: whitePawn,
  GH: whitePawn,
  HA: whiteRook,
  HH: whiteRook,
  HB: whiteKnight,
  HG: whiteKnight,
  HC: whiteBishop,
  HF: whiteBishop,
  HD: whiteKing,
  HE: whiteQueen,
};

export const moves = [
  {
    EE: whitePawn,
    GE: null,
  },
  {
    ED: whitePawn,
    GD: null,
  },
  {
    FF: whiteKnight,
    HG: null,
  },
  {
    EC: whitePawn,
    GC: null,
  },
  {
    FG: whitePawn,
    GG: null,
  },
];
